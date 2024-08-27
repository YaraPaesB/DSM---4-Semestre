import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <Typography variant="h5">LogIn</Typography>
        <Box
          component="form"
          sx={{
            marginTop: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuário"
            name="user"
            autoFocus
            // value={}
            // onChange={}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Usuário"
            type="password"
            name="password"
            // value={}
            // onChange={}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
