import { NativeBaseProvider, Box } from "native-base";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box>
        The quick brown fox jumps over the lazy dog
      </Box>
    </NativeBaseProvider>
  );
}
