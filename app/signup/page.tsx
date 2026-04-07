"use client" ;
import React, { useState } from 'react';
import styles from "../login/login.module.css";

const socialProviders = [
  { name: "LinkedIn", short: "in" },
  { name: "Facebook", short: "f" },
  { name: "Microsoft", short: "M" },
  { name: "Google", short: "G" },

];


export default function signupPage(){

    const  [step, setStep] = useState("email")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")

    /** Screen switching function Email to Verify code*/
    function SendCode(){
      setStep("code");
    }
    /** Screen switching function Verify to magneto Home */
    function Verify(){
      /** */
    }

    if (step == "email"){
      return(<main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.brandMag}>m</span>
          <span className={styles.brandNeto}>agneto</span>
          <span className={styles.brandSub}>empleos</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>¿Como deseas crear tu cuenta?</h1>
          <p className={styles.subtitle}>
            Puedes hacerlo fácilmente usando tus redes sociales o con tu correo electrónico.
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

        <button className={styles.primaryButton} onClick={SendCode}>Enviar codigo</button>

        <button className={styles.secondaryButton}>Ya tengo una cuenta</button>
      </section>
    </main>)
    }else{
      return(
        <main className={styles.page}>
        <section className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.brandMag}>mag</span>
          <span className={styles.brandNeto}>neto</span>
          <span className={styles.brandSub}>empleos</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Digita el codigo de verificación que fue enviado a tu correo electronico</h1>
          <p className={styles.subtitle}>
            Si no lo encuentras recuerda buscar en el apartado de spam
          </p>
        </div>

        <div className={styles.section}>
          <label htmlFor="verifyCode" className={styles.label}>
            Codigo de verificación:
          </label>

          <input
            id="verifyCode"
            type="text"
            placeholder="XXXXXX"
            className={styles.input}
            
          />
        </div>

        <button className={styles.primaryButton}>Verificar codigo</button>
        <button id = "Resend" className={styles.secondaryButton} >Volver a enviar el codigo</button>
      </section>
      </main>
      )
    }
}