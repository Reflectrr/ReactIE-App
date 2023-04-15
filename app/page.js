'use client'

import MyAppbar from "@/components/Navbar"
import FileUpload from "@/components/FileUpload"
import { Container } from "react-bootstrap"

export default function Home() {
  return (
    <>
      <MyAppbar />
      <Container>
        <FileUpload />
      </Container>
    </>
  )
}
