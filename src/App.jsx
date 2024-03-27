export default function App() {
  const o = "i love d";
  const imageURL =
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";

  return (
    <dev>
      <h1>{o}</h1>
      <img src={imageURL} alt="" width="480" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid
        sed aliquam voluptates laboriosam ea voluptatem consectetur minima
        pariatur iste distinctio, omnis reprehenderit nam quae. Modi autem totam
        sequi dolore.
      </p>
    </dev>
  );
}
