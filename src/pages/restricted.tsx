import { useSession } from "next-auth/react";
import AccessDenied from "~/components/AccessDenied";

export default function Restricted() {
  const { data: sessionData } = useSession();

  if (!sessionData) {
    return <AccessDenied />;
  }

  return (
    <>
      <h1> Du är inloggad!</h1>
      <p>Välkommen {sessionData.user.name}</p>
    </>
  );
}
