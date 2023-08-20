import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { update } from "@/store/slices/authSlice";
import { useNavigate } from "react-router";
import { login } from "@/lib/apiCalls/auth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { GoAlert } from "react-icons/go";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { err, res } = await login({
      payload: { username: values.username, password: values.password },
    });
    console.log(res?.data);
    if (err) {
      console.log(err);
    }
    if (res?.data.error) {
      setError(true);
    }
    dispatch(
      update({
        id: res?.data.data.admin.id,
        accessToken: res?.data.data.token,
      })
    );
    navigate("/");
  };
  return (
    <div className="h-screen w-screen bg-secondary">
      <div className="h-full container flex justify-center items-center">
        <div className="w-96 bg-white rounded-md flex flex-col justify-center items-start p-5 font-medium">
          <div className="text-2xl mb-5">Log In</div>
          {error && (
            <Alert variant="destructive" className="mb-3 text-red-500">
              <GoAlert className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Wrong credentials</AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage color="#f6f6f6" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="pt-5">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-5 text-white">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
