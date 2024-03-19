import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { ReactNode } from "react";

type TDragDropContainerProps = {
  children: ReactNode;
};

const DragDropContainer: React.FC<TDragDropContainerProps> = ({ children }) => {
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      {children}
    </DndProvider>
  );
};

export default DragDropContainer;
