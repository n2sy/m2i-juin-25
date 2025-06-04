import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component['estSoumis']) return true;
  else {
    if (
      confirm(
        'Vous risquez de perdre vos données, êtes-vous sûr de vouloir quitter ?'
      )
    )
      return true;
    return false;
  }
};
