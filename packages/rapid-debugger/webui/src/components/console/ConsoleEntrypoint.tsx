import Console from './Console';
import { ConsoleProvider } from './ConsoleContext';

export default function ConsoleEntrypoint() {
  return (
    <ConsoleProvider>
      <Console />
    </ConsoleProvider>
  );
}
