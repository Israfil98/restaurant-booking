import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { AnimatedElement, FormInput } from '../../components/common';
import { useAuth } from '../../hooks';

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const onSubmit = async (data: ILoginFormData) => {
    setLoading(true);
    setError(null);

    try {
      await login(data.email, data.password);
      navigate('/admin');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Invalid email or password',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-warm-dark py-32 sm:py-40">
      <div className="mx-auto max-w-md px-6">
        <div className="text-center">
          <AnimatedElement
            as="span"
            className="font-display text-burgundy-light mb-4 inline-block text-sm font-medium tracking-[0.3em] uppercase"
          >
            Admin Access
          </AnimatedElement>

          <AnimatedElement
            as="h1"
            delay={0.15}
            className="font-display text-cream mb-16 text-4xl font-bold sm:text-5xl"
          >
            Sign in
          </AnimatedElement>
        </div>

        <AnimatedElement delay={0.3}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-cream/5 bg-cream/5 flex flex-col gap-6 rounded-2xl border p-8"
          >
            {error && (
              <p className="rounded-lg bg-red-400/10 px-4 py-3 text-sm text-red-400">
                {error}
              </p>
            )}

            <FormInput
              label="Email"
              type="email"
              placeholder="admin@dinespot.com"
              required
              register={register('email', {
                required: 'Email is required',
              })}
              error={errors.email?.message}
            />

            <FormInput
              label="Password"
              type="password"
              placeholder="••••••••"
              required
              register={register('password', {
                required: 'Password is required',
              })}
              error={errors.password?.message}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-burgundy font-display text-cream hover:bg-burgundy-light mt-2 w-full rounded-lg px-8 py-3.5 text-sm font-medium tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default LoginPage;
