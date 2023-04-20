import { createSignal } from 'solid-js';
import { transcribe } from '../services/TranscriptionService';

function Transcription(props: { file: File | null }) {
  const [transcription, setTranscription] = createSignal<string | null>(null);

  const handleTranscribeClick = async () => {
    if (props.file) {
      const result = await transcribe(props.file);
      setTranscription(result);
    }
  };

  return (
    <>
      <button onClick={handleTranscribeClick}>Transcribe</button>
      {transcription() && <p>Transcription: {transcription()}</p>}
    </>
  );
}

export default Transcription;
