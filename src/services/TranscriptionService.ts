export async function transcribe(file: File): Promise<string> {
    return new Promise((resolve) =>
      setTimeout(() => resolve('Dummy transcription'), 1000)
    );
  }
  