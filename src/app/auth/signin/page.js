// app/auth/signin/page.js

"use client"; // Add this directive to make this component a client component

import { useState, useEffect } from 'react';
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function fetchProviders() {
      const providers = await getProviders();
      setProviders(providers);
    }
    fetchProviders();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Sign In</h1>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)} style={{ marginBottom: 10 }}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <div style={{ marginTop: 20 }}>
        <p>Don't have an account?</p>
        <Link href="/auth/register">Create a new account</Link>
      </div>
    </div>
  );
}