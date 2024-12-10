export type NetlifySiteType = {
    id: string;
    state: string;
    plan: string;
    name: string;
    custom_domain: string;
    domain_aliases: string[];
    branch_deploy_custom_domain: string;
    deploy_preview_custom_domain: string;
    password: string;
    notification_email: string;
    url: string;
    ssl_url: string;
    admin_url: string;
    screenshot_url: string;
    created_at: string;
    updated_at: string;
    user_id: string;
    session_id: string;
    ssl: boolean;
    force_ssl: boolean;
    managed_dns: boolean;
    deploy_url: string;
    published_deploy: {
      id: string;
      site_id: string;
      user_id: string;
      build_id: string;
      state: string;
      name: string;
      url: string;
      ssl_url: string;
      admin_url: string;
      deploy_url: string;
      deploy_ssl_url: string;
      screenshot_url: string;
      review_id: number;
      draft: boolean;
      required: string[];
      required_functions: string[];
      error_message: string;
      branch: string;
      commit_ref: string;
      commit_url: string;
      skipped: boolean;
      created_at: string;
      updated_at: string;
      published_at: string;
      title: string;
      context: string;
      locked: boolean;
      review_url: string;
      framework: string;
      function_schedules: {
        name: string;
        cron: string;
      }[];
    };
    account_id: string;
    account_name: string;
    account_slug: string;
    git_provider: string;
    deploy_hook: string;
    capabilities: Record<string, object>;
    processing_settings: {
      html: {
        pretty_urls: boolean;
      };
    };
    build_settings: {
      id: number;
      provider: string;
      deploy_key_id: string;
      repo_path: string;
      repo_branch: string;
      dir: string;
      functions_dir: string;
      cmd: string;
      allowed_branches: string[];
      public_repo: boolean;
      private_logs: boolean;
      repo_url: string;
      env: Record<string, string>;
      installation_id: number;
      stop_builds: boolean;
    };
    id_domain: string;
    default_hooks_data: {
      access_token: string;
    };
    build_image: string;
    prerender: string;
    functions_region: string;
  };
  
  export interface LanguagesType {
    [key: string]: number;
  }

  export type ProjectType = {
    name: string;
    url: string;
    screenshot_url: string;
    languages: LanguagesType;
    repoUrl: string;
  };

  interface Deployment {
    alias: string[];
    aliasAssigned: number;
    builds: any[];
    createdAt: number;
    createdIn: string;
    creator: {
      uid: string;
      email: string;
      username: string;
      githubLogin: string;
    };
    deploymentHostname: string;
    forced: boolean;
    id: string;
    meta: {
      githubCommitAuthorName: string;
      githubCommitMessage: string;
      githubCommitOrg: string;
      githubCommitRef: string;
      githubCommitRepo: string;
      githubCommitSha: string;
      githubDeployment: string;
      githubOrg: string;
      githubRepo: string;
      githubRepoOwnerType: string;
      githubCommitRepoId: string;
      githubRepoId: string;
      githubRepoVisibility: string;
      githubCommitAuthorLogin: string;
      branchAlias: string;
    };
    name: string;
    plan: string;
    private: boolean;
    readyState: string;
    target: string;
    teamId: string;
    type: string;
    url: string;
    userId: string;
    withCache: boolean;
  }
  
  interface Environment {
    target: string[];
    configurationId: string | null;
    id: string;
    key: string;
    createdAt: number;
    updatedAt: number;
    createdBy: string;
    updatedBy: string | null;
    type: string;
    value: string;
  }
  
export interface Project {
    accountId: string;
    alias: {
      configuredBy: string;
      configuredChangedAt: number;
      createdAt: number;
      deployment: Deployment;
      domain: string;
      environment: string;
      gitBranch: string | null;
      redirect: string | null;
      redirectStatusCode: number | null;
      target: string;
    }[];
    autoExposeSystemEnvs: boolean;
    autoAssignCustomDomains: boolean;
    autoAssignCustomDomainsUpdatedBy: string;
    buildCommand: string | null;
    createdAt: number;
    devCommand: string | null;
    directoryListing: boolean;
    env: Environment[];
    framework: string;
    gitForkProtection: boolean;
    id: string;
    installCommand: string;
    name: string;
    nodeVersion: string;
    outputDirectory: string | null;
    publicSource: string | null;
    resourceConfig: {
      functionDefaultMemoryType: string;
    };
    rootDirectory: string | null;
    serverlessFunctionRegion: string;
    sourceFilesOutsideRootDirectory: boolean;
    speedInsights: {
      id: string;
      hasData: boolean;
    };
    ssoProtection: {
      deploymentType: string;
    };
    updatedAt: number;
    live: boolean;
    gitComments: {
      onCommit: boolean;
      onPullRequest: boolean;
    };
    webAnalytics: {
      id: string;
    };
    link: {
      type: string;
      repo: string;
      repoId: number;
      org: string;
      repoOwnerId: number;
      gitCredentialId: string;
      productionBranch: string;
      sourceless: boolean;
      createdAt: number;
      updatedAt: number;
      deployHooks: any[];
    };
    latestDeployments: Deployment[];
    targets: {
      production: Deployment;
    };
  }
  
export interface VercelProjectsResponse {
    projects: Project[];
    pagination: {
      count: number;
      next: string | null;
      prev: string | null;
    };
  }
  