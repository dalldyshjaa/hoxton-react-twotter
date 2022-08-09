import { Header } from "./Header";
import { user } from "../types";
import { Main } from "./Main";
type Props = {
  user: user;
};

export function Home({ user }: Props) {
  return (
    <>
      <Header user={user} />
      <main className="overflow-y-scroll main-container">
        <Main user={user} />
      </main>
    </>
  );
}
