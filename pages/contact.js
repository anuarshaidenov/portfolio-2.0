import PrimaryButton from '../components/PrimaryButton';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  const [state, handleSubmit] = useForm('mwkajyvy');

  return (
    <section className="container max-w-6xl w-11/12 py-20 md:pt-40 min-h-screen">
      <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
        let&apos;s talk business.
      </h1>
      <p className="mb-10 md:mb-12 max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9 lowercase">
        hit me up for future projects or a simple chat.
      </p>

      {state.succeeded ? (
        <p
          className={`mb-10 md:mb-12 text-secondary max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9 lowercase`}
        >
          thanks, i&apos;ll get back to you asap!
        </p>
      ) : (
        <form className="max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-7 relative">
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              className="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary"
              type="text"
              id="name"
              name="name"
              placeholder="name."
              required
            />
            <label
              className="text-sm font-secondary absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75"
              htmlFor="name"
            >
              name.
            </label>
          </div>
          <div className="flex flex-col mb-10 relative">
            <input
              className="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary"
              type="email"
              id="email"
              name="email"
              placeholder="email."
              required
            />
            <label
              className="text-sm font-secondary absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75"
              htmlFor="email"
            >
              email.
            </label>
          </div>
          <div className="flex flex-col mb-7 relative">
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <textarea
              className="bg-transparent border-b-2 focus:outline-none peer placeholder-transparent focus:bg-tertiary"
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="message."
              required
            ></textarea>
            <label
              className="text-sm font-secondary absolute peer-placeholder-shown:top-0 peer-focus:-top-5 -top-5 transition-all duration-75"
              htmlFor="message"
            >
              message.
            </label>
          </div>
          <PrimaryButton disabled={state.submitting} type="submit">
            let&apos;s talk.
          </PrimaryButton>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
