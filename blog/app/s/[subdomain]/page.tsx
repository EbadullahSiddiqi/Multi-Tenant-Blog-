interface Params {
  subdomain: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { subdomain } = await params;
  console.log(subdomain)
  return (
    <div>
      <h1>Subdomain Page</h1>
      <p>This is a dynamic page for subdomains.</p>
    </div>
  );
}
