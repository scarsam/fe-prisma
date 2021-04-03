const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-sm text-red-600 mb-1">{message}</p>;
};

export default ErrorMessage;
