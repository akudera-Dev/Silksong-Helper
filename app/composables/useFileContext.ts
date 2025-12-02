import type { ISaveFileContext } from "@/interfaces/saveFile";

async function useFileContext<T extends ISaveFileContext>(newFile?: File | null) {
  const fileState = useState<File | null | undefined>("file");
  const fileContextState = useState<T | null>("fileContext");

  if (newFile === null) {
    fileState.value = null;
    fileContextState.value = null;
  } else if (newFile) {
    const decoded = await new FileDecode().getDecode(newFile);
    fileState.value = newFile;
    fileContextState.value = decoded;
  }

  return {
    file: fileState,
    fileContext: fileContextState,
  };
}

export default useFileContext;
