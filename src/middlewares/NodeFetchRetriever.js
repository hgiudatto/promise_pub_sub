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

  const token =
    "-----BEGIN PKCS7-----MIAGCSqGSIb3DQEHAqCAMIACAQExCzAJBgUrDgMCGgUAMIAGCSqGSIb3DQEHAaCA\nJIAEXFRpcG8tRG9jdW1lbnRvPUROSQpFeHBpcmFjaW9uPTI1IDA4IDIwMjMgMTU6\nNTE6NTUKRG9jdW1lbnRvPTIwNTczNDYwCkNvZGlnby1CYW5jbz0wMzQKU2V4bz1N\nAAAAAAAAoIAwggSIMIIDcKADAgECAgIB6zANBgkqhkiG9w0BAQsFADCBpjELMAkG\nA1UEBhMCQVIxFTATBgNVBAgTDEJ1ZW5vcyBBaXJlczEYMBYGA1UEBxMPQ2FwaXRh\nbCBGZWRlcmFsMSMwIQYDVQQKExpQcmlzbWEgTWVkaW9zIGRlIFBhZ28gUy5BLjEe\nMBwGA1UECxMVU2VndXJpZGFkIEluZm9ybWF0aWNhMSEwHwYDVQQDExhQcmlzbWEg\nU3ViQ0EgaW50ZXJuYWwgRzUwHhcNMjEwMzMwMTI0MDI1WhcNMjYwMzI5MTI0MDI1\nWjCBvTELMAkGA1UEBhMCQVIxKDAmBgNVBAgTH0NpdWRhZCBBdXRvbm9tYSBkZSBC\ndWVub3MgQWlyZXMxKDAmBgNVBAcTH0NpdWRhZCBBdXRvbm9tYSBkZSBCdWVub3Mg\nQWlyZXMxIzAhBgNVBAoTGlByaXNtYSBNZWRpb3MgZGUgUGFnbyBTLkEuMR4wHAYD\nVQQLExVTZWd1cmlkYWQgSW5mb3JtYXRpY2ExFTATBgNVBAMTDEJhbmVsY28gUy5B\nLjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOFhpOoywe1j4NoGywoe\n1fswt1ZWB8qQQiGU8/+s61ZLWv/1rbJ66QJD2gem/u9Ed1Dbvi8yAF4cP4XCPCLd\nnKM1SDFQtMkHHzaRWycdgz9qkyWZdmsueeNtWjttM8MFsJAvrb2IR90GDwKbnbGQ\nvbpc4m9ET7EYl099Q9C0PQfKSxWF0roqP+TJUGAw23oKugy1IqBOLQMKXS8VxWcJ\ndtm19jvduqlZRhgLv04nkWSWlixj4pnt2m22GfU+3XBo5hGp+Chh4UCFxs1cVDpZ\n7O1ccdoUpd9QRLfkc6eBKx2iznuNDwH2QWjWRqie9LMslGVS4tCO9rjX/EyMHCsM\nsP0CAwEAAaOBpjCBozAJBgNVHRMEAjAAMAsGA1UdDwQEAwIFoDA0BgNVHSUELTAr\nBggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcKAwMGCWCGSAGG+EIEATBTBglg\nhkgBhvhCAQ0ERhZEQ2VydGlmaWNhZG8gZW1pdGlkbyBwb3IgUHJpc21hIE1lZGlv\ncyBkZSBQYWdvIFMuQS4gcGFyYSBXZWIgU2VydmljZXMwDQYJKoZIhvcNAQELBQAD\nggEBAD2R9DMqeZ+WS224lEL5tWJdcrsyXNHL6LR6lV1vu9l0V4nlZfc9xCca3qMF\nuubz85bSbI6v6cnX6VO8lHQ8bokfdDS5fxhBVBrDXWiyOaQB6aCOwwx+NS/2nSMg\nShDnQ4+QWcI60iX/ARCYD4egJfCfeKy0Z7i4a3UE9bd7ui5Yd2L9ewcxMlnKUon1\nHcwJCzfACClJEJhoucKpWU9JDJO8L8+rpjV1lNlGbj+QZ3xmKFi34EFVRsFiN6lh\n3MS9n6vBxOZ5T2SmA0qLwLqBhNgVFW5QWZnkRIiwtBBcLo0oGPpbLGb9bkjJxoQv\nDPTiqJ7GxCqHnsqpQ/6DEVYWVxYAADGCAmAwggJcAgEBMIGtMIGmMQswCQYDVQQG\nEwJBUjEVMBMGA1UECBMMQnVlbm9zIEFpcmVzMRgwFgYDVQQHEw9DYXBpdGFsIEZl\nZGVyYWwxIzAhBgNVBAoTGlByaXNtYSBNZWRpb3MgZGUgUGFnbyBTLkEuMR4wHAYD\nVQQLExVTZWd1cmlkYWQgSW5mb3JtYXRpY2ExITAfBgNVBAMTGFByaXNtYSBTdWJD\nQSBpbnRlcm5hbCBHNQICAeswCQYFKw4DAhoFAKCBiDAYBgkqhkiG9w0BCQMxCwYJ\nKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0yMzAzMjgxNzU5MzRaMCMGCSqGSIb3\nDQEJBDEWBBRnoxOPup98lymgu50D65cykedT+TApBgkqhkiG9w0BCTQxHDAaMAkG\nBSsOAwIaBQChDQYJKoZIhvcNAQEBBQAwDQYJKoZIhvcNAQEBBQAEggEAWVyYghay\n2k2umrqaSmDt2ANKQ1aQvtxyBiYaag7SdfEluU0v1PMtiTLl0evPZvnXJErfZNKJ\nhvXexTKbwZ9tK9sqkypRqGXb4iK2ZEBW1IYNKzaJrlfTNU2tfTVLDPFtP+4e/Wx5\nLdZvkcnReaBC9jARK/6L1FBqQklIqOv0UvxqCv3bafjMB0tsOrW69X0iw8/zxBbl\nkYsJ1juDqJP4yVFUq8rYTfzVrFwpvjO9LN2QHd/QH/SwLI+kVa7cBGw1qbWJ/mKg\n9a5Sps+PVcMIaf+O2vfZBI1Mraf08G9tikyKhsetXM8G8LF4H4pEEubA4pJvfNDV\nW7ERXw7KcuWyfQAAAAAAAA==-----END PKCS7-----";

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
