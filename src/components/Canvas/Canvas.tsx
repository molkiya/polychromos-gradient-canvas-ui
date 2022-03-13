import React from 'react';

interface CanvasProps {
    label: string | number | null;
}

const Canvas = (props: CanvasProps) => {
    return <p>{props.label}</p>
}

export default Canvas;
