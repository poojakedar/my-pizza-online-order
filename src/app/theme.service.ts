import { Injectable, signal, computed, effect, inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

export type Theme = "dark" | "light";

@Injectable({ providedIn: "root" })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = signal<Theme>(this.getSavedTheme());

  public readonly theme = this._theme.asReadonly();
  public readonly isDark = computed(() => this._theme() === "dark");

  public constructor() {
    effect(() => {
      const theme = this._theme();
      this.document.documentElement.classList.toggle("light-theme", theme === "light");
      try {
        localStorage.setItem("pizza-theme", theme);
      } catch {
        /* ignore SSR/private mode */
      }
    });
  }

  public toggleTheme(): void {
    this._theme.update((t) => (t === "dark" ? "light" : "dark"));
  }

  private getSavedTheme(): Theme {
    try {
      return (localStorage.getItem("pizza-theme") as Theme) ?? "dark";
    } catch {
      return "dark";
    }
  }
}
