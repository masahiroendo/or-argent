import { useState } from 'react';

const useToggle = (initialyOpened: boolean = false) => {
  const [opened, setOpened] = useState<boolean>(initialyOpened);

  const toggle = () => {
    setOpened(!opened);
  };

  return {
    opened,
    toggle,
  };
};

export default useToggle;
