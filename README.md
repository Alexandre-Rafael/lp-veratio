# Veratio Tech Website

Site institucional em React + Vite publicado na AWS com `S3 + CloudFront`.

## Desenvolvimento local

```sh
npm ci
npm run dev
```

## Build local

```sh
npm run build
```

O build de produção é gerado em `dist/`.

## Deploy automático

O deploy para produção acontece via GitHub Actions no push para a branch `main`.

Workflow:
- instala dependências com `npm ci`
- gera o build com `npm run build`
- sincroniza `dist/` com o bucket `s3://veratiotech-site`
- invalida o cache da distribuição CloudFront `E1G4GVAYKTMSU8`

Arquivo do workflow:
- `.github/workflows/deploy-aws.yml`

## Secrets necessários no GitHub

No repositório do GitHub, configure estes secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

As credenciais precisam ter permissão para:
- `s3:ListBucket`
- `s3:PutObject`
- `s3:DeleteObject`
- `cloudfront:CreateInvalidation`

## Infra atual

- Bucket S3: `veratiotech-site`
- Região AWS: `us-east-1`
- CloudFront: `E1G4GVAYKTMSU8`
- Domínio principal: `https://www.veratiotech.com.br`
# lp-veratio
