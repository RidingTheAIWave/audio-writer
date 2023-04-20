import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import UploadAudio from './components/UploadAudio';
import Transcription from './components/Transcription';

const App: Component = () => {
  const [file, setFile] = createSignal<File | null>(null);

return (
<>
<h1>Audio Transcription SPA</h1>
<UploadAudio onFileChange={setFile} />
<Transcription file={file()} />
</>
);
};

export default App;
