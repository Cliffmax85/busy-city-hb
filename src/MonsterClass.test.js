import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// test('a monster button should have the classname monster', () => {
//     render(<App />);
//     const monsterButtonEl = screen.getByRole('button', { name: /Amazing! The alien zapped the lizard!/i });

//     fireEvent.click(monsterButtonEl);

//     const alienButtonEl = getb
// })

test('a monster button should have the classname monster', () => {
  const container = render(<App />);
  const monsterButtonEl = screen.getByRole('button', { name: /alien/i });
  fireEvent.click(monsterButtonEl);
  const alienButtonEl = container.monsterButtonEl.querySelector('#monster');
  expect(alienButtonEl).toBeInTheDocument();

  
});