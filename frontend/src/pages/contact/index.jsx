import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/ui/heading";
import { Helmet } from "react-helmet-async";

const contactFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be valid.",
    })
    .min(1, {
      message: "Email is required",
    }),
  name: z.string().min(1, { message: "The name field cannot be empty." }),
  phone: z
    .string()
    .min(10, { message: "The phone number must be at least 10 digits long." })
    .regex(/^\d+$/, {
      message: "The phone number must consist of numbers only.",
    }),
  message: z
    .string()
    .min(1, { message: "Message field cannot be empty." })
    .max(255, { message: "Your message can be up to 255 characters." }),
});

export default function Subscribe() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values) {
    setTimeout(() => {
      form.reset();
      form.setFocus("email");
    }, 2000);
  }

  return (
    <>
      <Helmet>
        <title>İletişim</title>
        <meta name="description" content="Rythm Tecnologies iletişim desc!" />
      </Helmet>
      <Heading level="h1" className="mb-4 px-4">
        Bizimle iletişime geç
      </Heading>
      <div className=" p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field, _ }) => (
                <FormItem className="flex-1 relative">
                  <FormLabel>Ad</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ad-soyad"
                      className="dark:border-border/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage
                    className="absolute left-0]"
                    style={{ top: "calc(100% - 5px)" }}
                  />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 gap-x-2 gap-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field, _ }) => (
                  <FormItem className="relative">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        className="dark:border-border/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage
                      className="absolute left-0]"
                      style={{ top: "calc(100% - 5px)" }}
                    />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field, _ }) => (
                  <FormItem className="flex-1 relative">
                    <FormLabel>
                      Telefon (
                      <span className="text-sm text-foreground/30">
                        &nbsp;10 hane olarak&nbsp;
                      </span>
                      )
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="5xx xxx xx xx"
                        className="dark:border-border/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage
                      className="absolute left-0]"
                      style={{ top: "calc(100% - 5px)" }}
                    />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field, _ }) => (
                <FormItem className="relative">
                  <FormLabel>Size nasıl yardımcı olabiliriz?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mesajınız..."
                      rows={5}
                      className="resize-none dark:border-border/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage
                    className="absolute left-0]"
                    style={{ top: "calc(100% - 5px)" }}
                  />
                </FormItem>
              )}
            />
            <FormItem className="text-start">
              <Button type="submit">Gönder</Button>
            </FormItem>
          </form>
        </Form>
      </div>
    </>
  );
}
