import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  notification: {
    show: (message: string) => {
      ipcRenderer.send('notify', message);
    },
  },
});
