"use client"
import Link from 'next/link'
import React from 'react'

const AuthOption = () => {
  return (
    <>
      <div className="text-end">
        <Link href={`/auth?page=login`} type="button" className="btn btn-outline-primary me-2">Login</Link>
        <Link href={`/auth?page=signup`} type="button" className="btn btn-primary">Sign-up</Link>
      </div>
    </>
  )
}

export default AuthOption
