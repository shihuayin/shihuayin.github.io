import { render, screen } from '@testing-library/react';
import App from './App';

test('links the Atlas GIS project to its live demo', () => {
  render(<App />);
  const projectLink = screen.getByRole('link', {
    name: 'Atlas | Bristol Infrastructure Explorer',
  });
  expect(projectLink).toHaveAttribute(
    'href',
    'https://atlas-vercel-upload-eight.vercel.app/'
  );
});
