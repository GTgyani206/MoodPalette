import { CopilotKit } from "@copilotkit/react-core";
 
export default function RootLayout({children}) {
  return (
    {/* Make sure to use the URL you configured in the previous step */}
    <CopilotKit runtimeUrl="/api/copilotkit">
      {children}
    </CopilotKit>
  );
}