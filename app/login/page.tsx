import styles from "./login.module.css";

const socialProviders = [
  { name: "LinkedIn", short: "in" },
  { name: "Facebook", short: "f" },
  { name: "Microsoft", short: "M" },
  { name: "Google", short: "G" },

];

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.brandMag}>m</span>
          <span className={styles.brandNeto}>agneto</span>
          <span className={styles.brandSub}>empleos</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Inicia sesión en tu cuenta</h1>
          <p className={styles.subtitle}>
            Puedes hacerlo fácilmente usando tus redes sociales o tu correo electrónico.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>Redes sociales</p>

          <div className={styles.socialGrid}>
            {socialProviders.map((provider) => (
              <button key={provider.name} className={styles.socialButton}>
                <span className={styles.socialIcon}>{provider.short}</span>
                <span>{provider.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <label htmlFor="email" className={styles.label}>
            Correo electrónico
          </label>

          <input
            id="email"
            type="email"
            placeholder="Escribe tu correo electrónico"
            className={styles.input}
          />
        </div>

        <button className={styles.primaryButton}>Continuar</button>

        <button className={styles.secondaryButton}></button>
      </section>
    </main>
  );
}