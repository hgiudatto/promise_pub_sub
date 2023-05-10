import fetch from "node-fetch";
import { Headers } from "node-fetch";

const nodeFetchJson = async () => {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();
  console.log(data.location);
};
// nodeFetchJson();

const nodeFetchSimplePost = async () => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: "a=1",
  });
  const data = await response.json();
  console.log(data);
};
// nodeFetchSimplePost();

const nodeFetchPostJson = async () => {
  const body = { a: 1 };

  const response = await fetch("https://httpbin.org/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  console.log(data);
};
// nodeFetchPostJson();

const nodeFetchPostFormParameters = async () => {
  const params = new URLSearchParams();
  params.append("token", "abc123");

  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: params,
  });
  const data = await response.json();

  console.log(data);
};
// nodeFetchPostFormParameters();

class HTTPResponseError extends Error {
  constructor(response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
    this.response = response;
  }
}

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new HTTPResponseError(response);
  }
};

const loginIntersiteFetch = async () => {
  // const params = new URLSearchParams();

  const token = `-----BEGIN PKCS7-----
  MIAGCSqGSIb3DQEHAqCAMIACAQExCzAJBgUrDgMCGgUAMIAGCSqGSIb3DQEHAaCA
  JIAEX1RpcG8tRG9jdW1lbnRvPUROSQpFeHBpcmFjaW9uPTI1wqAwOMKgMjAyM8Kg
  MTU6NTE6NTUKRG9jdW1lbnRvPTIwNTczNDYwCkNvZGlnby1CYW5jbz0wMzQKU2V4
  bz1NAAAAAAAAoIAwggSIMIIDcKADAgECAgIB6zANBgkqhkiG9w0BAQsFADCBpjEL
  MAkGA1UEBhMCQVIxFTATBgNVBAgTDEJ1ZW5vcyBBaXJlczEYMBYGA1UEBxMPQ2Fw
  aXRhbCBGZWRlcmFsMSMwIQYDVQQKExpQcmlzbWEgTWVkaW9zIGRlIFBhZ28gUy5B
  LjEeMBwGA1UECxMVU2VndXJpZGFkIEluZm9ybWF0aWNhMSEwHwYDVQQDExhQcmlz
  bWEgU3ViQ0EgaW50ZXJuYWwgRzUwHhcNMjEwMzMwMTI0MDI1WhcNMjYwMzI5MTI0
  MDI1WjCBvTELMAkGA1UEBhMCQVIxKDAmBgNVBAgTH0NpdWRhZCBBdXRvbm9tYSBk
  ZSBCdWVub3MgQWlyZXMxKDAmBgNVBAcTH0NpdWRhZCBBdXRvbm9tYSBkZSBCdWVu
  b3MgQWlyZXMxIzAhBgNVBAoTGlByaXNtYSBNZWRpb3MgZGUgUGFnbyBTLkEuMR4w
  HAYDVQQLExVTZWd1cmlkYWQgSW5mb3JtYXRpY2ExFTATBgNVBAMTDEJhbmVsY28g
  Uy5BLjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOFhpOoywe1j4NoG
  ywoe1fswt1ZWB8qQQiGU8/+s61ZLWv/1rbJ66QJD2gem/u9Ed1Dbvi8yAF4cP4XC
  PCLdnKM1SDFQtMkHHzaRWycdgz9qkyWZdmsueeNtWjttM8MFsJAvrb2IR90GDwKb
  nbGQvbpc4m9ET7EYl099Q9C0PQfKSxWF0roqP+TJUGAw23oKugy1IqBOLQMKXS8V
  xWcJdtm19jvduqlZRhgLv04nkWSWlixj4pnt2m22GfU+3XBo5hGp+Chh4UCFxs1c
  VDpZ7O1ccdoUpd9QRLfkc6eBKx2iznuNDwH2QWjWRqie9LMslGVS4tCO9rjX/EyM
  HCsMsP0CAwEAAaOBpjCBozAJBgNVHRMEAjAAMAsGA1UdDwQEAwIFoDA0BgNVHSUE
  LTArBggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcKAwMGCWCGSAGG+EIEATBT
  BglghkgBhvhCAQ0ERhZEQ2VydGlmaWNhZG8gZW1pdGlkbyBwb3IgUHJpc21hIE1l
  ZGlvcyBkZSBQYWdvIFMuQS4gcGFyYSBXZWIgU2VydmljZXMwDQYJKoZIhvcNAQEL
  BQADggEBAD2R9DMqeZ+WS224lEL5tWJdcrsyXNHL6LR6lV1vu9l0V4nlZfc9xCca
  3qMFuubz85bSbI6v6cnX6VO8lHQ8bokfdDS5fxhBVBrDXWiyOaQB6aCOwwx+NS/2
  nSMgShDnQ4+QWcI60iX/ARCYD4egJfCfeKy0Z7i4a3UE9bd7ui5Yd2L9ewcxMlnK
  Uon1HcwJCzfACClJEJhoucKpWU9JDJO8L8+rpjV1lNlGbj+QZ3xmKFi34EFVRsFi
  N6lh3MS9n6vBxOZ5T2SmA0qLwLqBhNgVFW5QWZnkRIiwtBBcLo0oGPpbLGb9bkjJ
  xoQvDPTiqJ7GxCqHnsqpQ/6DEVYWVxYAADGCAmAwggJcAgEBMIGtMIGmMQswCQYD
  VQQGEwJBUjEVMBMGA1UECBMMQnVlbm9zIEFpcmVzMRgwFgYDVQQHEw9DYXBpdGFs
  IEZlZGVyYWwxIzAhBgNVBAoTGlByaXNtYSBNZWRpb3MgZGUgUGFnbyBTLkEuMR4w
  HAYDVQQLExVTZWd1cmlkYWQgSW5mb3JtYXRpY2ExITAfBgNVBAMTGFByaXNtYSBT
  dWJDQSBpbnRlcm5hbCBHNQICAeswCQYFKw4DAhoFAKCBiDAYBgkqhkiG9w0BCQMx
  CwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0yMzAyMjgxNTA1MTBaMCMGCSqG
  SIb3DQEJBDEWBBSoyPOFw8CfH8V0+FXDa8vMiF6bmzApBgkqhkiG9w0BCTQxHDAa
  MAkGBSsOAwIaBQChDQYJKoZIhvcNAQEBBQAwDQYJKoZIhvcNAQEBBQAEggEAaZV7
  09RJu1Yxs8r5KCCr9tN9U/KQKqFPYPSkLCQrfgbBdNtoqZxf8qPGBEN7izc8H9tW
  mWN5T6JU6jWJcAEZpsuilwfZBxpJ5lTBfYn9qo4It6RclCdHzaOWqE9MJU66lzlp
  rzgdsiUYHspgkIebd/WHfCHszJcu54XDb1NDbuYBhViXfoQguxybdM4pPKEBszhs
  NGplsGk4SPUbAUSvPadY39OFxF2t/L3IcC690iTdcrwZ/q8hl5780ouD4KpGpBEQ
  b3j8iQI7KLzIiSCz04rk8/OSfDinS3vJ4hREAJT70Un38qtnMCALRLCOg5ED0YVH
  cFa6H4ksoY7EAaIXrQAAAAAAAA==
  -----END PKCS7-----
  `;

  const meta = new Map();
  meta.set("Content-Type", "application/json");
  meta.set(
    "Access-Control-Allow-Origin",
    "https://d2qhsylk4eedwz.cloudfront.net"
  );
  const data = JSON.stringify({ token: token, version: "2", opcion: "S" });

  const headers = new Headers(meta);
  // params.append(data);

  const intersiteResp = await fetch(
    "https://mp-pmc-bff.pmc-dev.prismamp.com/v1/auth/login_intersite",
    {
      method: "POST",
      body: data,
      headers: headers,
    }
  );

  try {
    checkStatus(intersiteResp);
    const respJson = await intersiteResp.json();
    console.log(respJson);
    console.log(`Response Ok: `, respJson.ok);
    console.log(`Response Status: `, respJson.status);
    console.log(`Response Status Text: `, respJson.statusText);
    // console.log(`Response Headers Raw: `, resp.headers.raw());
    console.log(
      `Response Headers Content-Type: `,
      resp.headers.get("content-type")
    );
  } catch (error) {
    console.error(error);

    const errorBody = await error.response.text();
    console.error(`Error body: ${errorBody}`);
  }
};
loginIntersiteFetch();

const nodeFetchErrorHandling = async () => {
  try {
    await fetch("https://domain-invalid/");
  } catch (error) {
    console.log(error);
  }
};
// nodeFetchErrorHandling();
