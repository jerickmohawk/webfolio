
import EmailTemplate from '@/components/EmailTemplate';
import MyTemplate from '@/components/MyTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request) {
    try {
      const body = await request.json()
      const {data, error} = await resend.emails.send({
        from: 'Jerick Cabarloc <arjeash@jerick.app>',
        to: body.email,
        subject: 'Thank You for Your Inquiry',
        react: EmailTemplate({firstname: body.firstname, service: body.service})
      });
      await resend.emails.send({
        from: 'Jerick Cabarloc <arjeash@jerick.app>',
        to: 'jerickcabarloc43@gmail.com',
        subject: 'Thank You for Your Inquiry',
        react: MyTemplate({body:body})
      });
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
      console.log(data)
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
}
