import { onMount } from 'solid-js';
import db from '../store/DB';
function AudioList() {
    const [audioList, setAudioList] = createSignal<Audio[]>([]);
  
    onMount(async () => {
      try {
        const result = await db.allDocs({ include_docs: true });
        const audios = result.rows.map(row => row.doc as Audio);
        setAudioList(audios);
      } catch (error) {
        console.error('Error fetching audio data:', error);
      }
    });
  
    return (
        <div>
          <h2>Audio List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Is Pre-Processed</th>
                <th>Is Transcribed</th>
                <th>Is Completed</th>
                <th>Status</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {audioList().map(audio => (
                <tr key={audio.dataRevisionID}>
                  <td>{audio.name}</td>
                  <td>{audio.isPreProcessed ? 'Yes' : 'No'}</td>
                  <td>{audio.isTranscribed ? 'Yes' : 'No'}</td>
                  <td>{audio.isCompleted ? 'Yes' : 'No'}</td>
                  <td>{audio.status}</td>
                  <td>{new Date(audio.lastUpdated).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
  export default AudioList;