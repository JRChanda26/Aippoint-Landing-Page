import { NextRequest, NextResponse } from 'next/server';
import mysqlConfiguration from '../../../../lib/mysql-configuration';

export async function POST(req: NextRequest) {
  const { fullname, email, phone, message } = await req.json();

  try {
    const query = `
      INSERT INTO contact (fullname, email, phone, message) 
      VALUES (?, ?, ?, ?)
    `;
    const values = [fullname, email, phone, message];

    await mysqlConfiguration.execute(query, values);

    return NextResponse.json({ temp: 'contact details send successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ temp: 'something went wrong' }, { status: 500 });
  }
}
