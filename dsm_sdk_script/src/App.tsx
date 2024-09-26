import {Link, Placeholder, UsersIllustration} from "akeneo-design-system";

function App() {
  return <Placeholder
      size={'large'}
      illustration={<UsersIllustration />}
      title="Welcome to the SDM SDK starter kit!"
  >
    Please update the src/App.tsx file to match your needs!<br/>
    <Link href="https://dsm.akeneo.com/" target="_blank">Link to the official Akeneo DSM</Link>
  </Placeholder>
}

export default App
