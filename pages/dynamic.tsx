import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://millershaw61:VzhWL3b4RKux@ep-flat-recipe-34120548.eu-central-1.aws.neon.tech/project-database?sslmode=require');

const posts = await sql('SELECT * FROM posts');

// See https://neon.tech/docs/serverless/serverless-driver
// for more information