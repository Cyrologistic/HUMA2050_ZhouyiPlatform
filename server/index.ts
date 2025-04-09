import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/hexagrams', (req, res) => {
  res.json([
    { number: 1, name: '乾', description: '天行健，君子以自强不息。' },
    { number: 2, name: '坤', description: '地势坤，君子以厚德载物。' },
    // Add more
  ]);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});