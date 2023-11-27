import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  close: () => ipcRenderer.invoke("close"),
  minimize: () => ipcRenderer.invoke("minimize"),
});
