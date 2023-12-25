import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Login_Page',
    Board: () => <div className="login__page__container"></div>,
    isSnippet: true,
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#d1f3ff',
        canvasWidth: 671,
        canvasHeight: 317
    }
});
