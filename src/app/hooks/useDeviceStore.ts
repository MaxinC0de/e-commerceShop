import { create } from "zustand";

type DeviceState = {
  isMobile: boolean;
};

const getIsMobile = () =>
  typeof window !== "undefined" ? window.innerWidth <= 768 : false

export const useDeviceStore = create<DeviceState>(() => ({
  isMobile: getIsMobile(),
}));

// Auto-update on resize
if (typeof window !== "undefined") {
  const update = () => {
    useDeviceStore.setState({ isMobile: getIsMobile() })
  };
  window.addEventListener("resize", update);
  update() // set once on load
}
