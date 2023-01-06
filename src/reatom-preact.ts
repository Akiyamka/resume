import { signal } from '@preact/signals';
import { Atom, AtomState } from '@reatom/core'
import { ctx } from 'store'

export function useAtom<T extends Atom>(atom: T): { value: AtomState<T> } {
  // @ts-expect-error
  const atomSignal = signal<AtomState<T>>(null);
  ctx.subscribe(atom, (newState) => atomSignal.value = newState);
  return atomSignal;
}