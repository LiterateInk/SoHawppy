import type { Request as OGRequest } from "@literate.ink/utilities";

export class Request {
  public url: URL;
  public content?: string;
  public headers: Record<string, string> = {
    "ocp-apim-subscription-key": "7d777a5c9c7a4def8f8e756688a0326a"
  };

  public constructor (endpoint: string, public method: OGRequest["method"] = "GET") {
    this.url = new URL(endpoint, "https://apim-production.so-happy.fr");
  }

  public addContentJSON (content: any): Request {
    this.headers["content-type"] = "application/json";
    this.content = JSON.stringify(content);
    return this;
  }

  public addAuthorization (token: string): Request {
    this.headers["authorization"] = `Bearer ${token}`;
    return this;
  }
}
