import { createSignal } from 'solid-js';

type UploadAudioProps = {
    onFileChange: (file: File | null) => void;
  };

function UploadAudio(props: UploadAudioProps) {
    const [file, setFile] = createSignal<File | null>(null);

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const selectedFile = target.files[0];
        setFile(selectedFile);
        props.onFileChange(selectedFile);
      }
    };
  
    return (
      <>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
        {file() && <p>Selected File: {file().name}</p>}
      </>);
}

export default UploadAudio;
