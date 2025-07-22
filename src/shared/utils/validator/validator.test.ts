import { validator } from "./validator.util";
import { describe, expect, it } from "vitest";

describe("validator.validatePasswordBoolean", () => {
  it("valid passwords pass", () => {
    expect(validator.validatePasswordBoolean("Abcdef1!")).toBe(true);
    expect(validator.validatePasswordBoolean("StrongPass123@")).toBe(true);
  });

  it("invalid passwords fail", () => {
    expect(validator.validatePasswordBoolean("abcdef1!")).toBe(false);
    expect(validator.validatePasswordBoolean("ABCDEF1!")).toBe(false);
    expect(validator.validatePasswordBoolean("Abcdefgh!")).toBe(false);
    expect(validator.validatePasswordBoolean("Abcdef12")).toBe(false);
    expect(validator.validatePasswordBoolean("A1!a")).toBe(false);
  });
});

describe("validator.validatePasswordFlags", () => {
  it("correctly sets flags for password", () => {
    expect(validator.validatePasswordFlags("Abcdef1!")).toEqual({
      hasNumber: true,
      hasLowerCaseLetter: true,
      hasUpperCaseLetter: true,
      hasSpecialCharacter: true,
      lengthIsValid: true,
    });

    expect(validator.validatePasswordFlags("abcdef")).toEqual({
      hasNumber: false,
      hasLowerCaseLetter: true,
      hasUpperCaseLetter: false,
      hasSpecialCharacter: false,
      lengthIsValid: false,
    });

    expect(validator.validatePasswordFlags("ABC12345")).toEqual({
      hasNumber: true,
      hasLowerCaseLetter: false,
      hasUpperCaseLetter: true,
      hasSpecialCharacter: false,
      lengthIsValid: true,
    });
  });
});

describe("validator.validateEmail", () => {
  it("valid emails pass", () => {
    expect(validator.validateEmail("test@example.com")).toBe(true);
    expect(validator.validateEmail("user.name+tag+sorting@example.co.uk")).toBe(
      true
    );
    expect(validator.validateEmail('"quoted@local"@example.com')).toBe(true);
  });

  it("invalid emails fail", () => {
    expect(validator.validateEmail("plainaddress")).toBe(false);
    expect(validator.validateEmail("@@example.com")).toBe(false);
    expect(validator.validateEmail("user@.com")).toBe(false);
    expect(validator.validateEmail("user@com")).toBe(false);
    expect(validator.validateEmail("user@domain..com")).toBe(false);
  });
});

describe("validator.validateUrl", () => {
  it("valid urls pass", () => {
    expect(validator.validateUrl("example.com")).toBe(true);
    expect(validator.validateUrl("www.example.com/path/to/page")).toBe(true);
    expect(validator.validateUrl("sub.domain.co.uk")).toBe(true);
  });

  it("invalid urls fail", () => {
    expect(validator.validateUrl("http://")).toBe(false);
    expect(validator.validateUrl("example")).toBe(false);
    expect(validator.validateUrl("example.c")).toBe(false);
    expect(validator.validateUrl(".com")).toBe(false);
  });
});
