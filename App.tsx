import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, FormControl, FormControlError, FormControlLabel, FormControlLabelText, GluestackUIProvider, Heading, InputField, Text } from '@gluestack-ui/themed';
import { useState } from 'react';
export default function App() {
  const [idade, setIdade] = useState("18")
  const [resultado, setResultado] = useState("")
  return (
    <GluestackUIProvider config={config}>
      <Box bg="$blue200" h={"$full"} 
      justifyContent="center" 
      alignItems="center">
        <Heading>Maior ou menor</Heading>
        <FormControl w={"$full"} px={"$5"}>
          <FormControlLabel>
            <FormControlLabelText>Idade</FormControlLabelText>
            </FormControlLabel>
        
        <input>
        <InputField placeholder="Exemplo: 18" />
        </input>
        <Button mt={"$2"}>
          <ButtonText>Calcular</ButtonText>
        </Button>
        </FormControl>
      <Text>Mirian</Text>
      </Box>
    </GluestackUIProvider>
  );
}
