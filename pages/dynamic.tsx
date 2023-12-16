import { neon } from '@neondatabase/serverless';

export async function getServerSideProps() {
  const sql = neon(process.env.DATABASE_URL);

  const response = await sql`SELECT version()`;
  console.log(response);
  return { props: { data: response } };
}

export default function Page({ data }) {
    return (
        <div>
          <h1>Data from Neon Database</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
}