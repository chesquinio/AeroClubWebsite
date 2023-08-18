import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Link from "next/link";

function TennisPage() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }

    const deleteExpiredReservations = async () => {
      try {
        await axios.delete("/api/expiredRes");
      } catch (error) {
        console.error("Error al eliminar los turnos vencidos:", error);
      }
    };

    deleteExpiredReservations();
  }, []);

  const handleReserveClick = () => {
    if (!userId) {
      router.push("/iniciar");
    } else {
      router.push("/tenis/reservas");
    }
  };

  return (
    <>
      <Header />
      
    </>
  );
}

export default TennisPage;
