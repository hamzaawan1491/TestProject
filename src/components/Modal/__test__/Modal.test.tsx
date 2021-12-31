import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../Modal';

import "@testing-library/jest-dom/extend-expect";

test('LoadResult component render', () => {
    const onClose: () => void = () => console.log('close modal');
  
    expect(render(<Modal onClose={onClose}>
        <div>Render Modal</div>
    </Modal>)).toBeTruthy();
});