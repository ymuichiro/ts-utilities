class SystemError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = 'SystemError';
  }
}

/** format system error */
export const systemError = (message: string, ...method: string[]): Error => {
  return new SystemError(`${message} (${method.join('.')})`);
};
