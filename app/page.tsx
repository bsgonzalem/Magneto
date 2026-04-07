import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Magneto</h1>

      <Link href="/login">
        Ingresar
      </Link>
      <br/>
      <Link href="/signup">
        Registrarse
      </Link>
    </div>
  );
}
