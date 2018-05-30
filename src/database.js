const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://rtm-aws-rds-postgres-01.c6g4jvss8ryi.us-east-2.rds.amazonaws.com:5432/Projects';

const client = 
